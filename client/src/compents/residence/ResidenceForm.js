import React, {useState , useContext} from 'react'
import ResidenceContext from '../../context/residence/residenceContent';

const ResidenceForm = () => {
  const residenceContext = useContext(ResidenceContext);
  const { addResidence, updateResidence, clearCurrent, current } = residenceContext

  const [
		residence,
		setResidence
	] = useState({
		type      : 'Rent',
		price     : ' ',
		bedrooms  : ' ',
		bathrooms : '',
		location  : ''
	});

	const { type, title,  price, bedrooms, bathrooms, sqft, location, description } = residence;

	const onChange = (e) => setResidence({ ...residence, [e.target.name]: e.target.value });

  
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addResidence(residence)
    }else {
      updateResidence(residence)
    }setResidence({
      type      : 'Rent',
      title     : ' ',
      price     : ' ',
      bedrooms  : ' ',
      bathrooms : '',
      sqft : '',
      location  : '',
      description  : ''
    })
  }

	return (
		<form onSubmit={onSubmit}>
			<h1>Add Your Property</h1>
			<select name="type" id="type">
				<option name="rent" id="rent" value={type}>
					Rent
				</option>
				<option name="sell" id="sell" value={type}>
					Sell
				</option>
			</select>
			<input type="text" placeholder="Title" name="title" value={title} onChange={onChange} />
			<input type="text" placeholder="Price" name="price" value={price} onChange={onChange} />
			
			<input type="text" placeholder="Bedrooms" name="bedrooms" value={bedrooms} onChange={onChange} />
			<input type="text" placeholder="Bathrooms" name="bathrooms" value={bathrooms} onChange={onChange} />
      <input type="text" placeholder="SqFt" name="sqft" value={sqft} onChange={onChange} />
			<input type="text" placeholder="Location" name="location" value={location} onChange={onChange} />
      <textarea name="description" placeholder="Description" value={description} cols="20" rows="5"></textarea>
			<input type="submit" value="Search" className="btn btn-primary btn-block" />
     
		</form>
	);
}

export default ResidenceForm
