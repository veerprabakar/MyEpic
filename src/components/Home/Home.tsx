import * as React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText, Col, Row } from 'reactstrap';
import { AutoComplete } from 'antd';

interface Props {

}

interface IProduct {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

export class Home extends React.Component<Props, {}> {
  state = {
    result: [],
    product: {}
  }

  async GetJSONData()
  {
      let response = await fetch('https://api.punkapi.com/v2/beers');
      let responseJson = await response.json();
      this.setState({
        isLoading: false,
        result: responseJson
    });
  }

  renderSearchResults(datalist: any) {
    var retval = [];
    for (var _i = 0; _i < datalist.length; _i++)
    {
      retval.push(
        <Col sm="4">
          <Card className="app-card">
              <CardTitle>{datalist[_i].name}</CardTitle>
              <img className="app-image" width="20%" height="20%" src={datalist[_i].image_url} alt="Card image cap" />
              <CardSubtitle>{datalist[_i].tagline}</CardSubtitle>
              <CardText>{datalist[_i].description}</CardText>
              <Button>Show Details</Button>
          </Card>
        </Col>);
    }
    return retval;
  }


  render() {
    var _this = this;
    return (
      <div>
        <Form>
          <FormGroup >
            <Label for="searchProducts">Search</Label>
            <Input type="text" name="prodSearch" id="search" placeholder="Product Name" />
            <Button onClick={(function() { return _this.GetJSONData() })}>Go</Button>
          </FormGroup>

          <div>
            <Row>
            {
              this.renderSearchResults(this.state.result)
            }
            </Row>
          </div>

        </Form>
    </div>
    );
  }
}