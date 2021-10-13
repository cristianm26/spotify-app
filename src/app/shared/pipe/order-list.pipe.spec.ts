import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json';
import { TrackModel } from '../../core/models/tracks.model';
describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });


  it('probando entrada y salida de valores', () => {

    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;

    //act
    const result: TrackModel[] = pipe.transform(data)

    // assert
    expect(result).toEqual(data);
  });


  it('probar su se ordena de manera correcta ASC', () => {
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;

    const firstValue = data.find((i: any) => i._id === 7) //50-cent
    const lastValue = data.find((i: any) => i._id === 6)

    // act

    const result: TrackModel[] = pipe.transform(data, 'name', 'asc')
    const firstResult = result[0];
    const lastResult = result[result.length - 1]
    // assert
    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);
  });


  it('probar su se ordena de manera correcta DESC', () => {
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;

    const firstValue = data.find((i: any) => i._id === 7) //50-cent
    const lastValue = data.find((i: any) => i._id === 6)

    // act

    const result: TrackModel[] = pipe.transform(data, 'name', 'desc')
    const firstResult = result[0];
    const lastResult = result[result.length - 1]
    // assert
    expect(firstResult).toEqual(lastValue);
    expect(lastResult).toEqual(firstValue);
  });
});
