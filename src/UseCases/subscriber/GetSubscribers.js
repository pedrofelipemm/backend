import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLOutputType
} from "graphql";
import Db from "../../../db.js";
import Subscriber from "../../InputType/Subscriber.js"

export default {
    type: new GraphQLList(Subscriber),
    name: "GetSubscribers",
    description: "Retorna a lista de inscritos.",
    args: {
        id: {
            type: GraphQLInt
        },
        cpf: {
            type: GraphQLInt
        }                    
    },
    resolve(root, args){
        return Db.models.subscriber.findAll({where: args});
    }
};