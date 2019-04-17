import React from 'react'
import CardContent from 'components/Card/CardContent';

type IUpcloudStorageProps = {
  storages: {
    title?: string,
  }[],
}

const UpcloudStorage = ({ storages }: IUpcloudStorageProps) => (
  <CardContent>
    <ul>
      {storages.map(({ title }, index) => {
        return (
          <li key={index}>
            {title}
          </li>
        )
      })}
    </ul>
  </CardContent>
)

export default UpcloudStorage