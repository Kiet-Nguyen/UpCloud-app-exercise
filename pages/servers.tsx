import React from 'react'
import Head from 'next/head'

import UpcloudServers from 'components/UpcloudServers'

const Servers = () => (
  <>
    <Head>
      <title>Upcloud|Servers</title>
    </Head>
    <main>
      <UpcloudServers />
    </main>
  </>
)

export default Servers