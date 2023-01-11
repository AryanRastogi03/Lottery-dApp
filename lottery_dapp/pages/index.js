import { useState } from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'

export default function Home()  {
  const [web3, setWeb3]= useState()
  const [address, setAddress] = useState()

  const conectWallethandler =  async () => {
    if(typeof window !== "undefined" && typeof window !=="undefined") {
      try{
        /*request wallet connection */
        await window.ethereum.request({ metthod:"eth_requestAccounts"})
        /*create web3 instance*/
        const web3 = new Web3(window.ethereum)
        setWeb3(web3)
        const accounts = await web3.eth.getAccounts()
        /*set account 1 to react state */
        setAddress(accounts[0])
      } catch(err){
        console.log(err.message)
      }

    } else {
      console.log("Please Install Matamask")
    }
  }
  return (
    <div>
      <Head>
        <title>Lottery dapp</title>
        <meta name="description" content="A Lottery dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className="navbar mt-6 mb-6">
          <div className="container">
            <div className="navbar-brand">
              <h1>Lottery dapp</h1>
            </div>
            <div className="navbar-end">
            <button onClick={conectWallethandler}className="button is-link">Connect Wallet</button>
            </div>

          </div>

        </nav>
        <div className="container">
          <section className="mb-5">
            <div className="columns">
              <div className="column is-two-third">
                <section className="mb-5">
                  <p>Enter the Lottery by sending 0.02 Ether</p>
                  <button className="button is-link is-rounded is-light mt-5">Lets Go</button>
                </section>
                <section className="mt-6">
                  <p><b>Admin Only:</b> Pick Winner</p>
                  <button className="button is-danger is-rounded is-light mt-5">Pick Winner</button>
                </section>    
            </div>
            <div className={`${styles.lotteryinfo} column is-one-fourth`}> 
              <section className="mb-5">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h2>Lottery History</h2>
                      <div className="history-entry">
                        <div>Lottery #1 Winner:</div>
                        <div>
                          <a href="https://etherscan.io/address/0x4f737556Af0CCfD3708098d4c59ACad83Ad54170" target="_blank">
                            0x4f737556Af0CCfD3708098d4c59ACad83Ad54170
                          </a>
                        </div>
                        </div>
                      </div> 
                  </div>           
                </div>
              </section>
              <section className="mb-5">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h2>Players (1)</h2>
                      <div className="history-entry">
                        <div>Lottery #1 Winner:</div>
                        <div>
                          <a href="https://etherscan.io/address/0x4f737556Af0CCfD3708098d4c59ACad83Ad54170" target="_blank">
                            0x4f737556Af0CCfD3708098d4c59ACad83Ad54170
                          </a>
                        </div>
                        </div>
                      </div> 
                  </div>           
                </div>
              </section><section className="mb-5">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h2>Pot</h2>                    
                        <p>50 Ethers</p>
                        
                      </div> 
                  </div>           
                </div>
              </section>
            </div> 
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022 Block Explorer</p>
      </footer>
    </div>
  )
}
