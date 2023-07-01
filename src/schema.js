const gql = require('graphql-tag');


const typeDefs = gql`
type Device {
id: String!
name: String!
deployed: Boolean!
gateway_id: String!
location: Location!
domain: String!
visibility: String!
sensors: [Sensor!]!
actuators: [Actuator!]!
}

type Location {
latitude: Float!
longitude: Float!
}

type Sensor {
id: ID!
quantity_kind: String!
name: String!
unit: String!
sensor_kind: String!
}

type Actuator {
id: ID!
actuator_value_type: String!
value: Boolean!
actuator_kind: String!
name: String!
}

type Query {
devices: [Device!]!
device(id: ID!): Device!
}
`;

module.exports = typeDefs;
