import { hexToRGB } from 'utils/color';

describe('Test Color Utils',() => {
  it('Transforfs 3 digit strings', () => {
    expect(hexToRGB('#FFF')).to.eq('rgb(255, 255, 255)');
    expect(hexToRGB('#DDD')).to.eq('rgb(221, 221, 221)');
    expect(hexToRGB('#345')).to.eq('rgb(51, 68, 85)');
    expect(hexToRGB('#1A3')).to.eq('rgb(17, 170, 51)');
    expect(hexToRGB('#A4F')).to.eq('rgb(170, 68, 255)');
    expect(hexToRGB('#098')).to.eq('rgb(0, 153, 136)');
    expect(hexToRGB('#111')).to.eq('rgb(17, 17, 17)');
    expect(hexToRGB('#777')).to.eq('rgb(119, 119, 119)');
    expect(hexToRGB('#FDA')).to.eq('rgb(255, 221, 170)');
    expect(hexToRGB('#000')).to.eq('rgb(0, 0, 0)');

    expect(hexToRGB('FFF')).to.eq('rgb(255, 255, 255)');
    expect(hexToRGB('DDD')).to.eq('rgb(221, 221, 221)');
    expect(hexToRGB('345')).to.eq('rgb(51, 68, 85)');
    expect(hexToRGB('1A3')).to.eq('rgb(17, 170, 51)');
    expect(hexToRGB('A4F')).to.eq('rgb(170, 68, 255)');
    expect(hexToRGB('098')).to.eq('rgb(0, 153, 136)');
    expect(hexToRGB('111')).to.eq('rgb(17, 17, 17)');
    expect(hexToRGB('777')).to.eq('rgb(119, 119, 119)');
    expect(hexToRGB('FDA')).to.eq('rgb(255, 221, 170)');
    expect(hexToRGB('000')).to.eq('rgb(0, 0, 0)');
  });

  it('Transforms 4 digit strings', () => {
    expect(hexToRGB('#FFF0')).to.eq('rgba(255, 255, 255, 0)');
    expect(hexToRGB('#FFF1')).to.eq('rgba(255, 255, 255, 0.067)');
    expect(hexToRGB('#F002')).to.eq('rgba(255, 0, 0, 0.133)');
    expect(hexToRGB('#0F03')).to.eq('rgba(0, 255, 0, 0.2)');
    expect(hexToRGB('#00F4')).to.eq('rgba(0, 0, 255, 0.267)');
    expect(hexToRGB('#ABC5')).to.eq('rgba(170, 187, 204, 0.333)');
    expect(hexToRGB('#D5B6')).to.eq('rgba(221, 85, 187, 0.4)');
    expect(hexToRGB('#1CE7')).to.eq('rgba(17, 204, 238, 0.467)');
    expect(hexToRGB('#65A8')).to.eq('rgba(102, 85, 170, 0.533)');
    expect(hexToRGB('#CE29')).to.eq('rgba(204, 238, 34, 0.6)');
    expect(hexToRGB('#000A')).to.eq('rgba(0, 0, 0, 0.667)');
    expect(hexToRGB('#fffB')).to.eq('rgba(255, 255, 255, 0.733)');
    expect(hexToRGB('#333C')).to.eq('rgba(51, 51, 51, 0.8)');
    expect(hexToRGB('#6AED')).to.eq('rgba(102, 170, 238, 0.867)');
    expect(hexToRGB('#777E')).to.eq('rgba(119, 119, 119, 0.933)');
    expect(hexToRGB('#000F')).to.eq('rgba(0, 0, 0, 1)');
  
    expect(hexToRGB('FFF0')).to.eq('rgba(255, 255, 255, 0)');
    expect(hexToRGB('FFF1')).to.eq('rgba(255, 255, 255, 0.067)');
    expect(hexToRGB('F002')).to.eq('rgba(255, 0, 0, 0.133)');
    expect(hexToRGB('0F03')).to.eq('rgba(0, 255, 0, 0.2)');
    expect(hexToRGB('00F4')).to.eq('rgba(0, 0, 255, 0.267)');
    expect(hexToRGB('ABC5')).to.eq('rgba(170, 187, 204, 0.333)');
    expect(hexToRGB('D5B6')).to.eq('rgba(221, 85, 187, 0.4)');
    expect(hexToRGB('1CE7')).to.eq('rgba(17, 204, 238, 0.467)');
    expect(hexToRGB('65A8')).to.eq('rgba(102, 85, 170, 0.533)');
    expect(hexToRGB('CE29')).to.eq('rgba(204, 238, 34, 0.6)');
    expect(hexToRGB('000A')).to.eq('rgba(0, 0, 0, 0.667)');
    expect(hexToRGB('fffB')).to.eq('rgba(255, 255, 255, 0.733)');
    expect(hexToRGB('333C')).to.eq('rgba(51, 51, 51, 0.8)');
    expect(hexToRGB('6AED')).to.eq('rgba(102, 170, 238, 0.867)');
    expect(hexToRGB('777E')).to.eq('rgba(119, 119, 119, 0.933)');
    expect(hexToRGB('000F')).to.eq('rgba(0, 0, 0, 1)');
  });

  it('Transforms 6 digit strings', () => {
    expect(hexToRGB('#ABCDEF')).to.eq('rgb(171, 205, 239)');
    expect(hexToRGB('#FEDCBA')).to.eq('rgb(254, 220, 186)');
    expect(hexToRGB('#123456')).to.eq('rgb(18, 52, 86)');
    expect(hexToRGB('#987456')).to.eq('rgb(152, 116, 86)');
    expect(hexToRGB('#12ABC3')).to.eq('rgb(18, 171, 195)');
    expect(hexToRGB('#756CDB')).to.eq('rgb(117, 108, 219)');
    expect(hexToRGB('#53FE2C')).to.eq('rgb(83, 254, 44)');
    expect(hexToRGB('#FF00FF')).to.eq('rgb(255, 0, 255)');
    expect(hexToRGB('#FFFFFF')).to.eq('rgb(255, 255, 255)');
    expect(hexToRGB('#000000')).to.eq('rgb(0, 0, 0)');

    expect(hexToRGB('ABCDEF')).to.eq('rgb(171, 205, 239)');
    expect(hexToRGB('FEDCBA')).to.eq('rgb(254, 220, 186)');
    expect(hexToRGB('123456')).to.eq('rgb(18, 52, 86)');
    expect(hexToRGB('987456')).to.eq('rgb(152, 116, 86)');
    expect(hexToRGB('12ABC3')).to.eq('rgb(18, 171, 195)');
    expect(hexToRGB('756CDB')).to.eq('rgb(117, 108, 219)');
    expect(hexToRGB('53FE2C')).to.eq('rgb(83, 254, 44)');
    expect(hexToRGB('FF00FF')).to.eq('rgb(255, 0, 255)');
    expect(hexToRGB('FFFFFF')).to.eq('rgb(255, 255, 255)');
    expect(hexToRGB('000000')).to.eq('rgb(0, 0, 0)');
  });

  it('Transforms 8 digit strings', () => {+
  expect(hexToRGB('#00000000')).to.eq('rgba(0, 0, 0, 0)');
  expect(hexToRGB('#ABCDEF10')).to.eq('rgba(171, 205, 239, 0.063)');
  expect(hexToRGB('#FEDCBA20')).to.eq('rgba(254, 220, 186, 0.125)');
  expect(hexToRGB('#12345633')).to.eq('rgba(18, 52, 86, 0.2)');
  expect(hexToRGB('#98745648')).to.eq('rgba(152, 116, 86, 0.282)');
  expect(hexToRGB('#12ABC351')).to.eq('rgba(18, 171, 195, 0.318)');
  expect(hexToRGB('#756CDB69')).to.eq('rgba(117, 108, 219, 0.412)');
  expect(hexToRGB('#53FE2C77')).to.eq('rgba(83, 254, 44, 0.467)');
  expect(hexToRGB('#FF00FFDA')).to.eq('rgba(255, 0, 255, 0.855)');
  expect(hexToRGB('#FFFFFFFF')).to.eq('rgba(255, 255, 255, 1)');

  expect(hexToRGB('00000000')).to.eq('rgba(0, 0, 0, 0)');
  expect(hexToRGB('ABCDEF10')).to.eq('rgba(171, 205, 239, 0.063)');
  expect(hexToRGB('FEDCBA20')).to.eq('rgba(254, 220, 186, 0.125)');
  expect(hexToRGB('12345633')).to.eq('rgba(18, 52, 86, 0.2)');
  expect(hexToRGB('98745648')).to.eq('rgba(152, 116, 86, 0.282)');
  expect(hexToRGB('12ABC351')).to.eq('rgba(18, 171, 195, 0.318)');
  expect(hexToRGB('756CDB69')).to.eq('rgba(117, 108, 219, 0.412)');
  expect(hexToRGB('53FE2C77')).to.eq('rgba(83, 254, 44, 0.467)');
  expect(hexToRGB('FF00FFDA')).to.eq('rgba(255, 0, 255, 0.855)');
  expect(hexToRGB('FFFFFFFF')).to.eq('rgba(255, 255, 255, 1)');
  });

  it('Returns Invalid string when the convertion fails', () => {
    expect(hexToRGB('/5r4t1g')).to.eq('Invalid String');
    expect(hexToRGB('AAAAA')).to.eq('Invalid String');
    expect(hexToRGB('0000000')).to.eq('Invalid String');
    expect(hexToRGB('AAAAAG')).to.eq('Invalid String');
    expect(hexToRGB('ZABCDE')).to.eq('Invalid String');
    expect(hexToRGB('CC')).to.eq('Invalid String');
    expect(hexToRGB('FFFFFFFFFF')).to.eq('Invalid String');
    expect(hexToRGB('101010W')).to.eq('Invalid String');
    expect(hexToRGB('?ABCDE')).to.eq('Invalid String');
    expect(hexToRGB('9=9')).to.eq('Invalid String');
    expect(hexToRGB('MCMXCIX')).to.eq('Invalid String');
  });
});