import {expect, test} from 'bun:test';
import {createAvccBox} from '../create/iso-base-media/mdia/minf/stbl/stsd/create-avcc';

test('avcc box', () => {
	expect(
		createAvccBox(
			new Uint8Array([
				1, 100, 0, 32, 255, 225, 0, 27, 103, 100, 0, 32, 172, 217, 64, 68, 2,
				39, 150, 92, 4, 64, 0, 0, 3, 0, 64, 0, 0, 12, 3, 198, 12, 101, 128, 1,
				0, 6, 104, 235, 224, 140, 178, 44, 253, 248, 248, 0,
			]),
		),
	).toEqual(
		new Uint8Array([
			0, 0, 0, 56, 97, 118, 99, 67, 1, 100, 0, 32, 255, 225, 0, 27, 103, 100, 0,
			32, 172, 217, 64, 68, 2, 39, 150, 92, 4, 64, 0, 0, 3, 0, 64, 0, 0, 12, 3,
			198, 12, 101, 128, 1, 0, 6, 104, 235, 224, 140, 178, 44, 253, 248, 248, 0,
		]),
	);
});
