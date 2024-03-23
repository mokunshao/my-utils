import { copyToClipboard } from '../src/copyToClipboard';

let text: string;

Object.assign(navigator, {
  clipboard: {
    writeText: (value: string) => {
      text = value;
    },
    readText: () => text,
  },
});

const testString = 'test 😃';

// 准备要复制的文本
const textToCopy = 'Hello, Jest!';

describe('copyToClipboard', () => {
  it('should copy text to clipboard when navigator.clipboard.writeText is available', async () => {
    // 创建一个 spy 来模拟 navigator.clipboard.writeText 的行为
    const spywriteText = jest.spyOn(navigator.clipboard, 'writeText');

    await copyToClipboard(testString);
    expect(spywriteText).toHaveBeenCalledWith(testString);
    expect(navigator.clipboard.readText()).toBe(testString);

    // 调用 copyToClipboard 函数
    await copyToClipboard(textToCopy);

    // 验证 writeText 方法被调用，并且参数正确
    expect(spywriteText).toHaveBeenCalledWith(textToCopy);
    expect(navigator.clipboard.readText()).toBe(textToCopy);

    // 恢复 navigator.clipboard.writeText 的原始行为
    spywriteText.mockRestore();
  });
});
