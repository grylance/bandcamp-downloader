(() => {
  if (window.location.href.includes('https://bandcamp.com/download?cart_id=')) {
    const downloadAll = () =>
      jQuery('span.download-title a').map(
        (index, download) => setTimeout(
          () => window.location = jQuery(download).attr('href'),
          index * 5000
        )
      )

    const button = jQuery('<input />', {
      type: 'button',
      value: 'Download All',
      click: downloadAll,
      style: `
        background: #0687f5;
        color: white;
        font-weight: bold;
        padding: 10px;
        width: 150px;
        border: 0;
        border-radius: 3px;
        margin-bottom: 30px;
        cursor: pointer;
      `
    })

    button.insertBefore('ul.downloads li:first')
  }
})()
