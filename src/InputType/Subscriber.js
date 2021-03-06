import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} from "graphql";
import Db from "../../db"
import User from "./User.js"
import AditionalData from "./SubscriberAditionalData.js"
import SocioEconomicData from "./SubscriberSocioEconomicData.js"

//Tenho que apenas exportar o schema
export default new GraphQLObjectType({
    name: "Subscriber",
    description: "This representes a User that subscribed to the course.",
    fields: () => {
        return {
            id: {
                type: GraphQLString,
                resolve(subscriber){
                    return subscriber.id
                }
            },
            birthDate: {
                type: GraphQLString,
                resolve(subscriber){
                    return subscriber.birthDate
                }
            },
            birthPlace: {
                type: GraphQLString,
                resolve(subscriber){
                    return subscriber.birthPlace
                }
            },
            phone: {
                type: GraphQLString,
                resolve(subscriber){
                    return subscriber.phone
                }
            },
            citizenCard: {
                type: GraphQLString,
                resolve(subscriber){
                    return subscriber.citizenCard
                }
            }, 
            cpf: {
                type: GraphQLString,
                resolve(subscriber){
                    return subscriber.cpf
                }
            },
            rg: {
                type: GraphQLString,
                resolve(subscriber){
                    return subscriber.rg
                }
            },
            photo: {
                type: GraphQLString,
                resolve(subscriber){
                    return subscriber.photo
                }
            },
            user: {
                type: User,
                resolve(subscriber){
                    return subscriber.getUser();
                }
            },
            aditionalData: {
                type: AditionalData,
                resolve(subscriber){
                    return Db.models.subscriber_aditional_data.find({
                        where: {
                            subscriberId: subscriber.id
                        }
                    })
                }
            },
            socioEconomicData: {
                type: SocioEconomicData,
                resolve(subscriber){
                    return Db.models.subscriber_socio_economic.find({
                        where: {
                            subscriberId: subscriber.id
                        }
                    })
                }
            }
        }
    }
});