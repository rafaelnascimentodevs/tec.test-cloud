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


  function handleDelEntity(id) {
    setEntitys (entitys.filter(entity => entity.id !== id))
    axios.delete(`/entitys/${id}`)

  }

  return (
    <div className="feedContainer">
      {entitys.map((entity) => (
        <Card  key={entity.id} entity={entity} onDelEntity={handleDelEntity} />
      ))}
    </div>
  );
}
