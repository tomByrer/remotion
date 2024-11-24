import {exampleVideos} from '@remotion/example-videos';
import {expect, test} from 'bun:test';
import {parseMedia} from '../parse-media';
import {nodeReader} from '../readers/from-node';

test('AVI file', async () => {
	const {boxes} = await parseMedia({
		src: exampleVideos.avi,
		reader: nodeReader,
		fields: {
			boxes: true,
		},
	});
	expect(boxes).toEqual([
		{
			fileSize: 742470,
			fileType: 'AVI',
			type: 'riff-header',
		},
		{
			listType: 'hdrl',
			type: 'list-box',
		},
		{
			listType: 'INFO',
			type: 'list-box',
		},
		{
			id: 'JUNK',
			size: 1016,
			type: 'riff-box',
		},
		{
			listType: 'movi',
			type: 'list-box',
		},
		{
			id: 'idx1',
			size: 37376,
			type: 'riff-box',
		},
	]);
});
