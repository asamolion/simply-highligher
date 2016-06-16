function highlight(container, what, spanClass) {
    var content = container.innerHTML,
        pattern = new RegExp('(>[^<.]*)(' + what + ')([^<.]*)', 'gi'),
        replaceWith = '$1<span ' + (spanClass ? 'class="' + spanClass + '"' : '') + '">$2</span>$3',
        highlighted = content.replace(pattern, replaceWith);
    return (container.innerHTML = highlighted) !== content;
}

if (highlight(document.body, 'simply', 'highlight-simple')) {
    chrome.runtime.sendMessage('disable');
} else {
    chrome.runtime.sendMessage('enable');
}