# [Newline Guidelines](https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-5/#G10213)

Newline function values differ across operating systems.

> Any NLF causes a line break.

Windows is unlike other operating systems in that it expects two code points to signify an NLF. Because of this, text editors cannot just interpret a CR to be a line break. They must look ahead to check if it's followed by an LF and not treat that as a separate line break. Otherwise, for every line, they would show an additional unnecessary empty line. MacOS made a switch from CR to LF as its NLF in its X release. I predict that Windows will also switch from CRLF to LF in the future.

When encoded into HTML, line separators are br tags and paragraph separators are p tags. In a subsequent HTML update, p tags were allowed to contain children: text and other HTML elements.

> Line separators basically correspond to HTML `<br>`, and paragraph separators to older usage of HTML `<p>` (modern HTML delimits paragraphs by enclosing them in `<p>...</p>`).

Keyboards have keys for line and paragraph separators.

> In word processors, paragraph separators are usually entered using a keyboard RETURN or ENTER; line separators are usually entered using a modified RETURN or ENTER, such as SHIFT-ENTER.

In modern times when we say line separators, we usually means paragraph separators.

> Traditionally, NLF started out as a line separator (and sometimes record separator). It is still used as a line separator in simple text editors such as program editors. As platforms and programs started to handle word processing with automatic line-wrap, these characters were reinterpreted to stand for paragraph separators.

Microsoft Word puts a paragraph separator into the document when the user presses ENTER. When the user presses SHIFT-ENTER, it puts a... VT into the document.

> Once NLF was reinterpreted to stand for a paragraph separator, in some cases another control character was pressed into service as a line separator. For example, vertical tabulation VT is used in Microsoft Word.

Trying to disambiguate between paragraph and line separators as their meaning in the scope of control characters has gotten confusing, Unicode has special, two-byte characters for them: PS and LS.

> In word processing, interpret any NLF the same as PS. ... In simple text editors, interpret any NLF the same as LS.
