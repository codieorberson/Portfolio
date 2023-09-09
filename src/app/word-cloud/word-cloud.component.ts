import { Component, OnInit, ElementRef, NgZone, OnDestroy, Input } from '@angular/core';
import * as d3 from 'd3';
import * as cloud from 'd3-cloud';

interface SkillWord {
  text: string;
  size: number;
  color: string;
  x: number;
  y: number;
  rotate: number;
}

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit, OnDestroy {
  @Input() skillsData: any[] = [];

  private svg: any;
  private width = 2000;
  private height = 800;

  constructor(private element: ElementRef, private zone: NgZone) { }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.createWordCloud();
    });
  }

  ngOnDestroy(): void {
    if (this.svg) {
      this.svg.remove();
    }
  }

  createWordCloud(): void {
    const element = this.element.nativeElement;

    this.svg = d3.select(element).append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    cloud().size([this.width, this.height])
      .words(this.skillsData as SkillWord[])
      .padding(5)
      .rotate(() => Math.floor(Math.random() * 2) * 90)
      .font('Arial')
      .fontSize(d => d.size)
      .on('end', this.drawWordCloud.bind(this))
      .start();
}

  drawWordCloud(words: SkillWord[]): void {
    this.svg.append('g')
      .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`)
      .selectAll('text')
      .data(words)
      .enter().append('text')
      .style('font-size', (d: SkillWord) => `${d.size}px`)
      .style('fill', (d: SkillWord, i: number) => d.color!)
      .attr('text-anchor', 'middle')
      .attr('transform', (d: SkillWord) => `translate(${[d.x!, d.y!]})rotate(${d.rotate!})`)
      .text((d: SkillWord) => d.text)
      .on('mouseover', (event: { currentTarget: any; }, d: SkillWord) => {
        d3.select(event.currentTarget)
            .style('font-size', `${d.size * 1.05}px`)
            .style('font-weight', 'bold')
            .style('stroke', 'black')
            .style('stroke-width', '0.5px');
    })
    .on('mouseout', (event: { currentTarget: any; }, d: SkillWord) => {
        d3.select(event.currentTarget)
            .style('font-size', `${d.size}px`)
            .style('fill', d.color!)
            .style('stroke', 'none')
            .style('font-weight', 'normal');
    });
  }

}
