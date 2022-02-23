import React from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function Item({ items, cantFind, backTo }) {
	const { id } = useParams() || 'hummus';

	let item = items.find((item) => item.id === id);
	if (!item) return <Redirect to={cantFind} />;

	return (
		<section>
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">{item.name}</CardTitle>
					<CardText className="font-italic">{item.description}</CardText>
					<p>
						<b>Recipe:</b> {item.recipe}
					</p>
					<p>
						<b>Serve:</b> {item.serve}
					</p>
					<p>
						<img class="card-img-top" src="https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864?k=20&m=1188445864&s=612x612&w=0&h=0vuJeOxJr8Lu3Q1VdT1z7t6HcM8Oj7EVJe3CexGnH_8=" alt="Card image cap"/>	
					</p>
					<Link to={`/${backTo.toLowerCase()}`}>All {backTo}</Link>
				</CardBody>
			</Card>
		</section>
	);
}

export default Item;
