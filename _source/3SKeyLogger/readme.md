Keyboard: keydown and keyup
Before we get to keyboard, please note that on modern devices there are other ways to “input something”. For instance, people use speech recognition (especially on mobile devices) or copy/paste with the mouse.

So if we want to track any input into an <input> field, then keyboard events are not enough. There’s another event named input to track changes of an <input> field, by any means. And it may be a better choice for such task. We’ll cover it later in the chapter Events: change, input, cut, copy, paste.

Keyboard events should be used when we want to handle keyboard actions (virtual keyboard also counts). For instance, to react on arrow keys Up and Down or hotkeys (including combinations of keys).

Teststand
To better understand keyboard events, you can use the teststand below.

Try different key combinations in the text field.