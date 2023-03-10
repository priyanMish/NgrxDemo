import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapleafLetComponent } from './mapleaf-let.component';

describe('MapleafLetComponent', () => {
  let component: MapleafLetComponent;
  let fixture: ComponentFixture<MapleafLetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapleafLetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapleafLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
