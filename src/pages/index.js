import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Vertex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <section>
        <div className="entry-text-container">
          <img style={{marginBottom:'10px'}} width={60} src="/assets/logo.png" />
          <p style={{ fontSize: '16px' }}>Vertex</p>
          <p style={{ fontSize: '32px', marginBottom:'20px'}}>Welcome to our Icon Garage</p>
          <a style={{ textDecoration: 'none' }} href="/dashboard">
            <button className="entry-btn">Let's Start</button>
          </a>
          <div className="entry-models">
            {/* {
              arr.map((ele, index) => {
                let topValue = index===0 ? -40 : 30*index
                let leftValue = index===0 ? 425 : 
                console.log('index==>', index);
                return <div style={{position:'relative', top: `${topValue}px` }}>{ele}</div>
              })
            } */}
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '-430px', left: '245px' }} src='/assets/images/bell.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '-225px', left: '375px' }} src='/assets/images/bookmark.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '10px', left: '350px' }} src='/assets/images/button_key_pad.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '185px', left: '245px' }} src='/assets/images/calculator.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '-430px', right: '245px' }} src='/assets/images/camera.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '-225px', right: '375px' }} src='/assets/images/chat.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '10px', right: '350px' }} src='/assets/images/Clock.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '185px', right: '245px' }} src='/assets/images/coconut.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '-345px', left: '530px' }} src='/assets/images/coffee_cup.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '-100px', left: '570px' }} src='/assets/images/coffee_mug.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '120px', left: '530px' }} src='/assets/images/dairy.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '-345px', right: '530px' }} src='/assets/images/darts.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '-100px', right: '570px' }} src='/assets/images/dropper.png' />
            <img className="entry-model" width={110} style={{ position: 'absolute', top: '120px', right: '530px' }} src='/assets/images/folder.png' />
          </div>
        </div>
      </section>
    </>
  );
}
