import React from "react"
import { Grid } from "@material-ui/core"
import LayoutIndividual from "./individualLayout"
import ServiceItem from "./styled/servicesItem"
import { landlordServiceList, tenantServiceList } from "../fakedata"

export default function Services() {
  return (
    <LayoutIndividual
      header="What we do"
      subheader="Grover Property Solutions offers arange of services for house
    hunters (both personal and corporate), landloards and property
    investors and tenants. All of these services are tailored to individual requirements,
    making sure your needs are always met."
      id="Services"
      bg={1}
    >
      <Grid container alignItems="stretch" spacing={1}>
        <Grid item md={6}>
          <ServiceItem
            header="Landlords"
            description="We offer a full, tailored management service to landlords and
                  helpful advice, including visits and letting valuations for
                  your property."
            openingText="Services can include and are not exclusive to :"
            iterableList={landlordServiceList}
          ></ServiceItem>
        </Grid>
        <Grid item md={6}>
          <ServiceItem
            header="Tenants"
            description="Whether you're looking to rent a property on a short or
            long-term basis, Grove Property Solutions is here to help. We
            pride ourselves in taking the time to get to know individual
            tenants and always listen to your particular needs and wishes.
            We can negotiate the best deals on your behalf, working within
            an agreed budget and give you all the facts you need to make a
            confident, informed decision. "
            openingText="We'll arrange the following at your convenience :"
            iterableList={tenantServiceList}
          ></ServiceItem>
        </Grid>
      </Grid>
    </LayoutIndividual>
  )
}
