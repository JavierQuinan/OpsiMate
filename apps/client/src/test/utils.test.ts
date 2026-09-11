import { describe, expect, it } from 'vitest';
import { getContrastColor } from '@/lib/utils';

describe('getContrastColor', () => {
	it('uses dark text on a light background', () => {
		expect(getContrastColor('#ffffff')).toBe('#000000');
	});

	it('uses light text on a dark background', () => {
		expect(getContrastColor('#000000')).toBe('#ffffff');
	});

	it('accepts colors without a leading hash', () => {
		expect(getContrastColor('ffffff')).toBe('#000000');
	});
});
