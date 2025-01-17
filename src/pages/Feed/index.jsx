import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import './styles.css'
import axios from 'axios'

export function Feed() {
  const [entitys, setEntitys] = useState([]);

  useEffect(() => {
    axios.get('/entitys')
      .then((response) => {
        setEntitys(response.data.entitys)
      })

  }, [])

  return (
    <div className="feedContainer">
      {entitys.map((entity) => (
        <Card key={entity.id} entity={entity} />
      ))}
    </div>
  );
}
