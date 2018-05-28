const Rize = require('rize')


// describe('UI test', () => {
//   it('example test', async () => {
//     const rize = new Rize()
//     rize
//       .goto('http://localhost:8000/')
//    })
// })


//   const puppeteer = require('puppeteer')
//   void (async () => {
// 	  const browser = await puppeteer.launch();
// 	  const page = await browser.newPage();
// 	  await page.goto('https://shbaoyuantech.com');
	 
// 	  // Get the "viewport" of the page, as reported by the page.
// 	  const dimensions = await page.evaluate(() => {
// 	    return {
// 	      width: document.documentElement.clientWidth,
// 	      height: document.documentElement.clientHeight,
// 	      deviceScaleFactor: window.devicePixelRatio
// 	    };
//   });
 
//   console.log('Dimensions:', dimensions);
 
//   await browser.close();
// })();


// const puppeteer = require('puppeteer')
// void (async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.goto('http://www.shbaoyuantech.com/')

//  const dimensions = await page.evaluate(() => {
//  	    return {
//   	      width: document.documentElement.clientWidth,
//   	      height: document.documentElement.clientHeight,
//   	      deviceScaleFactor: window.devicePixelRatio
//   	    };
//  });




 // await page.screenshot({ 
 //  			path: 'a.png' ,
 //  			 // fullPage: true
 //  			  clip: {
 //  			 	      x: 0,
 //  			 	      y: 0,
 //  			 	       width: 1000,
 //      					height: 1000,
 //  			 	}
	// })	
//    console.log('Dimensions:', dimensions);
//   await browser.close()
// })()

const puppeteer = require('puppeteer')
void  (async () => {
	const browser = await puppeteer.launch({headless:true});
	const page = await browser.newPage();
	await page.goto('http://www.shbaoyuantech.com/');
	await page.setViewport({width:1920, height:1080});
	const documentSize = await page.evaluate(() => {
		return {
			width: document.documentElement.clientWidth,
			height : document.body.clientHeight,
		}
	})
	await page.screenshot({path:"example.png", clip : {x:0, y:0, width:1920, height:documentSize.height}});

	await browser.close();
})();


// const rize = new Rize()
// rize
//   .goto('https://github.com/')
//   .type('input.header-search-input', 'node')
//   .press('Enter')
//   .waitForNavigation()
//   .assertSee('Node.js')
//   .end() 


//  const puppeteer = require('puppeteer')
//  void (async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage();
//   await page.goto('http://www.shbaoyuantech.com/');
// 	  await page.screenshot({
// 	    path: 'jianshu.png',
// 	    type: 'png',
// 	    // quality: 100, 只对jpg有效
// 	    fullPage: true
// 	    // 指定区域截图，clip和fullPage两者只能设置一个
// 	    // clip: {
// 	    //   x: 0,
// 	    //   y: 0,
// 	    //   width: 1000,
// 	    //   height: 40
// 	    // }
// 	  });
// 	  browser.close();
// 	})();
// })();