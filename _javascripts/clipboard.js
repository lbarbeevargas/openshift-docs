// This file runs the Clipboard.js functionality //
document.querySelectorAll('div.listingblock').forEach((codeblock, index) => {
  codeblock.insertAdjacentHTML("beforebegin", "<p><span class='clipboard-button fa fa-clipboard'></span></p>");
  document.getElementsByTagName('pre')[index].setAttribute('id',`hello${index}`);
});

document.querySelectorAll('span.clipboard-button').forEach((copybutton, index) => {
  copybutton.setAttribute('data-clipboard-target',`#hello${index}`);
});

var clipboard = new ClipboardJS('.clipboard-button');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.trigger.classList.toggle("fa-clipboard");
    e.trigger.classList.toggle("fa-check");
    setTimeout(function(){
      e.clearSelection();
      e.trigger.classList.toggle("fa-clipboard");
      e.trigger.classList.toggle("fa-check");
    }, 2000);
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
