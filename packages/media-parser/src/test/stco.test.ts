import {expect, test} from 'bun:test';
import {exampleAudioSamplePositions} from '../create/iso-base-media/example-stts';
import {createStcoAtom} from '../create/iso-base-media/mdia/minf/stbl/create-stco';

const reference = new Uint8Array([
	0, 0, 1, 232, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 71, 195, 0,
	0, 81, 197, 0, 0, 91, 68, 0, 0, 106, 144, 0, 0, 116, 71, 0, 0, 131, 113, 0, 0,
	141, 199, 0, 0, 147, 232, 0, 0, 168, 46, 0, 0, 178, 64, 0, 0, 192, 112, 0, 0,
	220, 222, 0, 0, 235, 180, 0, 0, 247, 239, 0, 1, 5, 68, 0, 1, 25, 128, 0, 1,
	39, 79, 0, 1, 52, 223, 0, 1, 113, 239, 0, 1, 132, 94, 0, 1, 144, 198, 0, 1,
	163, 167, 0, 1, 177, 65, 0, 1, 195, 175, 0, 1, 216, 13, 0, 1, 237, 28, 0, 1,
	255, 79, 0, 2, 11, 159, 0, 2, 32, 133, 0, 2, 46, 79, 0, 2, 54, 142, 0, 2, 65,
	218, 0, 2, 82, 109, 0, 2, 98, 35, 0, 2, 109, 6, 0, 2, 117, 3, 0, 2, 130, 232,
	0, 2, 137, 190, 0, 2, 205, 92, 0, 2, 227, 56, 0, 2, 238, 39, 0, 2, 254, 101,
	0, 3, 13, 86, 0, 3, 41, 221, 0, 3, 53, 24, 0, 3, 62, 170, 0, 3, 69, 68, 0, 3,
	96, 15, 0, 3, 104, 209, 0, 3, 114, 159, 0, 3, 125, 176, 0, 3, 138, 117, 0, 3,
	154, 71, 0, 3, 170, 2, 0, 3, 180, 223, 0, 3, 187, 217, 0, 3, 201, 223, 0, 3,
	212, 95, 0, 4, 35, 90, 0, 4, 53, 47, 0, 4, 60, 96, 0, 4, 75, 115, 0, 4, 88,
	12, 0, 4, 98, 22, 0, 4, 104, 0, 0, 4, 116, 142, 0, 4, 130, 198, 0, 4, 137,
	131, 0, 4, 146, 60, 0, 4, 151, 255, 0, 4, 164, 57, 0, 4, 170, 249, 0, 4, 179,
	194, 0, 4, 188, 115, 0, 4, 195, 8, 0, 4, 204, 252, 0, 4, 210, 29, 0, 4, 218,
	186, 0, 5, 42, 103, 0, 5, 56, 101, 0, 5, 63, 32, 0, 5, 71, 168, 0, 5, 80, 150,
	0, 5, 90, 93, 0, 5, 100, 151, 0, 5, 106, 101, 0, 5, 116, 18, 0, 5, 124, 171,
	0, 5, 137, 160, 0, 5, 147, 161, 0, 5, 156, 101, 0, 5, 168, 93, 0, 5, 177, 66,
	0, 5, 189, 67, 0, 5, 195, 99, 0, 5, 206, 31, 0, 5, 213, 246, 0, 5, 224, 62, 0,
	6, 52, 209, 0, 6, 65, 175, 0, 6, 76, 78, 0, 6, 81, 195, 0, 6, 89, 240, 0, 6,
	100, 1, 0, 6, 108, 32, 0, 6, 119, 73, 0, 6, 124, 45, 0, 6, 134, 163, 0, 6,
	139, 217, 0, 6, 148, 25, 0, 6, 154, 228, 0, 6, 162, 250, 0, 6, 169, 90, 0, 6,
	177, 52, 0, 6, 186, 70, 0, 6, 190, 193, 0, 6, 202, 37, 0, 6, 207, 163,
]);

test('stco', () => {
	expect(createStcoAtom(exampleAudioSamplePositions)).toEqual(reference);
});
