import { ImgBrokenDirective } from './img-broken.directive';
import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock">'
})

class TestComponent {
  public srcMock: any = null;
}

describe('ImgBrokenDirective', () => {


  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  // Deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });


  it('TestComponent deberia instaciarce correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia de cambiar la imagen por un base 64', (done: DoneFn) => {
    //Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
    const beforeImgSrc = beforeImgElement.src;
    component.srcMock = undefined;

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
      const afterImgSrc = afterImgElement.src;
      expect(afterImgSrc).toMatch(/\bdata:image\b/);
      done();
    }, 3000);
  })

});
