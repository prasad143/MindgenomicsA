import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sb-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './card.component.html',
    styleUrls: ['card.component.scss'],
})
export class CardComponent implements OnInit {
    // @Output() clickemitref = new EventEmitter();
    @Input() background!: string;
    @Input() color!: string;

    customClasses: string[] = [];
    // GetSalDetails(){
    //     alert('its form child');
    //     this.clickemitref.emit();
    // }

    constructor() {}
    ngOnInit() {
        if (this.background) {
            this.customClasses.push(this.background);
        }
        if (this.color) {
            this.customClasses.push(this.color);
        }
    }
}
