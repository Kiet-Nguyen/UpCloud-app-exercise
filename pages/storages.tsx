import React from 'react'
import Head from 'next/head'

import UpcloudStorages from 'components/UpcloudStorages'

const Storages = () => (
  <>
    <Head>
      <title>Upcloud|Storages</title>
    </Head>
    <main>
      <UpcloudStorages />
    </main>
  </>
)

export default Storages