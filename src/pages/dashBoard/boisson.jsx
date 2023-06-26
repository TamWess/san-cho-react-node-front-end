import React, {useEffect, useState} from 'react'
import "../../utils/style/style.scss"
import axios from 'axios'
import { URLBOISSON } from '../../utils/constantes/urls-boisson';


const Boisson = () => {
	const [boissons, setBoissons] = useState([]);

	useEffect(()=>{
		const fetchBoisson = async () =>{
			try {
				const {data} = await axios.get(URLBOISSON.fetchBoissons)
				setBoissons(data)
			}
			catch(error){
				console.log(error.message);
			}
		}
		fetchBoisson()
	},[])

	console.log(boissons);
const deleteBoisson = ()=>{
	alert("attention")
}

  return (
	<>
	<h1>Boisson</h1>
	<table className='table'>
		<thead>
			<tr>
				<th scope='col'>#</th>
				<th scope='col'><h2>name</h2></th>
				<th scope='col'>picture</th>
				<th scope='col'>description</th>
				<th scope='col'>prix</th>
				<th scope='col'>action</th>
			</tr>
		</thead>
		<tbody className='table-group-divider'>
			{boissons.map(boisson => (
				<tr>
				<th scope='row'>1</th>
				<td>{boisson.name}</td>
				<td><img src={boisson.image} alt="" width={100}/></td>
				<td>{boisson.description}</td>
				<td>{boisson.prix}</td>
				<td><i onClick={deleteBoisson}>Bouton</i></td>
			</tr>
			))}
		</tbody>
	</table>
		<form>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" placeholder='name'/>
			<label htmlFor="picture">Picture</label>
			<input type="text" id="picture" placeholder='picture' />
			<label htmlFor="description">Description</label>
			<input type="text" id="description" placeholder='description'/>
			<label htmlFor="prix" >Prix</label>
			<input type="text" id="prix" placeholder='prix'/>
			<button>Valider</button>
		</form>
	</>
  )
}

export default Boisson