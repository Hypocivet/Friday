var mongo = require("mongoose");
mongo.connect("mongodb://localhost/friday",{useNewUrlParser:true});
var registerModel;
var userinfoModel;
var orderModel;
var commodityModel;
var evaluateModel;
var logisticsModel;
var shopModel;
var usersiteModel;
var carModel;
var integrationModel;
var intorderModel;
mongo.connection.on("open",function(){
    var register = new mongo.Schema({
        phoneNum:{type:"String",default:""},
        password:{type:"String",default:""}
    }, {
        collection:"registry"
    });
    registerModel = mongo.model("registry",register);
    var userInfo = new mongo.Schema({
        headImg: {type: "String", default: ""},
        sex: {type: "String", default: ""},
        birthday: {type: "String", default:""},
        phone: {type:"String", default: ""},
        integration:{type:"String",default:""},
        balance:{type:"String",default:""}
    },{
        collection: "userinfo"
    });
    userinfoModel = mongo.model("userinfo",userInfo);
    var order = new mongo.Schema({
        commodityId:{type:"String",ref:"commodity"},
        userId:{type:"String",ref:"userinfo"},
        userSite:{type:"String",ref:"usersite"},
        orderId:{type:"String",default:""},
        logistics:{type:"String",ref:"logistics"},
        orderTime:{type:"String",default:""},
        payTime:{type:"String",default:""},
        sendTime:{type:"String",default:""},
        getTime:{type:"String",default:""},
        cancelTime:{type:"String",default:""},
        aplyRefundTime:{type:"String",default:""},
        refundTime:{type:"String",default:""},
        refundCause:{type:"String",default:""},
        orderRemark:{type:"String",default:""},
        orderState:{type:"String",default:""},
        count:{type:"String",default:""},
        size:{type:"String",default:""},
        payType:{type:"String",default:""},
        payNum:{type:"String",default:""}
    },{
        collection:"orderform"
    });
    orderModel = mongo.model("orderform",order);
    var commodity = new mongo.Schema({
        commodityImg:{type:"String",default:""},
        commodityName:{type:"String",default:""},
        commodityInfo:{type:"String",default:""},
        commodityPrice:{type:"String",default:""},
        commoditySize:{type:"String",default:""},
        shopName:{type:"String",default:""},
        shopPhone:{type:"String",default:""},
        shopkeeper:{type:"String",default:""}
    },{
        collection:"commodity"
    });
    commodityModel = mongo.model("commodity",commodity);
    var evaluate = new mongo.Schema({

    },{
        collection:"evaluate"
    });
    evaluateModel = mongo.model("evaluate",evaluate);
    var logistics = new mongo.Schema({
        id:{type:"String",default:""},
        phone:{type:"String",default:""},
        name:{type:"String",default:""}
    },{
        collection:"logistics"
    });
    logisticsModel = mongo.model("logistics",logistics);
    var shop = new mongo.Schema({
        shopId:{type:"String",default:""},
        shopName:{type:"String",default:""},
        shopTime:{type:"String",default:""},
        shopPhone:{type:"String",default:""},
        shopSite:{type:"String",default:""},
        shopNotice:{type:"String",default:""},
        shopType:{type:"String",default:""},
        shopGrade:{type:"String",default:""},
        shopImg:{type:"String",default:""},
        shopkeeper:{type:"String",default:""}
    },{
        collection:"shop"
    });
    shopModel = mongo.model("shop",shop);
    var userSite = new mongo.Schema({
        userId:{type:"String",default:""},
        name:{type:"String",default:""},
        area:{type:"String",default:""},
        detail:{type:"String",default:""},
        phone:{type:"String",default:""},
        default:{type:"String",default:""},
        remark:{type:"String",default:""}
    },{
        collection:"usersite"
    });
    usersiteModel = mongo.model("usersite",userSite);
    var car = new mongo.Schema({
        shopName:{type:"String",default:""},
        commodityName:{type:"String",default:""},
        size:{type:"String",default:""},
        unit:{type:"String",default:""},
        count:{type:"String",default:""},
    },{
        collection:"car"
    });
    carModel = mongo.model("car",car);
    var integration = new mongo.Schema({
        userId:{type:"String",default:""},
        date:{type:"String",default:""},
        change:{type:"String",default:""},
        type:{type:"String",default:""},
    },{
        collection:"integration"
    });
    integrationModel = mongo.model("integration",integration);
    var intorder = new mongo.Schema({
        commodityId:{type:"String",ref:"commodity"},
        userId:{type:"String",ref:"userinfo"},
        userSite:{type:"String",ref:"usersite"},
        orderId:{type:"String",default:""},
        logistics:{type:"String",ref:"logistics"},
        orderTime:{type:"String",default:""},
        payTime:{type:"String",default:""},
        sendTime:{type:"String",default:""},
        getTime:{type:"String",default:""},
        orderRemark:{type:"String",default:""},
        orderState:{type:"String",default:""},
        count:{type:"String",default:""},
        size:{type:"String",default:""}
    },{
        collection:"intorder"
    });
    intorderModel = mongo.model("intorder",intorder);
});
mongo.connection.on("error",function(){
    console.log("失败");
});
module.exports = {
    getUserByPhone:function(phoneNum, password,callbcak) {
        registerModel.find({ phoneNum:phoneNum,password:password },function(error,result){
            callbcak(Object.keys(result).length != 0);
        })
    },
    addUser(phoneNum,password,callback){
        registerModel.create({
            "phoneNum":phoneNum,
            "password":password
        },function(error,result){
            callback(Object.keys(result).length != 0);
        });
    },
    updateUser(oldPhoneNum,newPhoneNum){
        registerModel.update({phoneNum:oldPhoneNum},{$set:{phoneNum:newPhoneNum}},function(){});
    },
    addUserInfo(headImg,sex,birthday,phone,integration,balance,callback){
        userinfoModel.create({
            "headImg":headImg,
            "sex":sex,
            "birthday":birthday,
            "phone":phone,
            "integration":integration,
            "balance":balance
        },function(error,result){
            callback(Object.keys(result).length != 0);
        });
    },
    updateUserInfo(headImg,sex,birthday,phone,callback){
        userinfoModel.update({phone:phone},{$set:{sex:sex,birthday:birthday,headImg:headImg}},function(error,result){
            callback(Object.keys(result).length != 0);
        });
    },
    updateBalance(userId,balance,callback){
        userinfoModel.find({phone:userId},{_id:0,balance:1},function(error,results){
            userinfoModel.update({phone:userId},{$set:{balance:(parseInt(balance) + parseInt(results[0].balance)).toString()}},function(error,results){
                callback(Object.keys(results).length != 0);
            });
        });
    },
    getUserInfo(phone,callback){
        userinfoModel.find({phone:phone},function(error,result){
            if(result!=null){
                callback(result);
            }
        })
    },
    changePhone(oldPhone,newPhone,callback){
        userinfoModel.update({phone:oldPhone},{$set: {phone:newPhone}},function(error,result){
            callback(Object.keys(result).length != 0);
        })
    },
    getOrderinfo(userId,callback){
        var id = "";
        userinfoModel.find({phone:userId},function(error,results){
            if(userId!=null)
                id = results[0]._id;
            else
                callback([]);
            orderModel.find({userId:id},function(error,results){
                callback(results);
            }).populate("commodityId").populate("userId").populate("userSite").populate("logistics");
        })
    },
    getUserSite(userId,callback){
        usersiteModel.find({userId:userId},function(error,results){
            callback(results);
        });
    },
    addUserSite(userId,name,area,detail,phone,defaults,callback){
        usersiteModel.create({
            userId:userId,
            name:name,
            area:area,
            detail:detail,
            phone:phone,
            default:defaults
        },(results)=>{
            callback(Object.keys(results).length != 0);
        });
    },
    deleteSite(id,callback){
        usersiteModel.remove({_id:id},function(error,results){
            callback(Object.keys(results).length != 0);
        });
    },
    deleteOrder(orderId,callback){
        orderModel.remove({orderId:orderId},function(error,results){
            callback(Object.keys(results).length != 0);
        });
    },
    updateOrder(orderId,orderState,callback){
        orderModel.update({orderId:orderId},{$set:{orderState:orderState}},function(error,results){
            callback(Object.keys(results).length != 0);
        });
    },
    updateOderGetTime(orderId,getTime,callback){
        orderModel.update({orderId:orderId},{$set:{getTime:getTime}},function(error,results){
            callback(Object.keys(results).length != 0);
        });
    },
    updateOrderCancelTime(orderId,cancelTime,callback){
        orderModel.update({orderId:orderId},{$set:{cancelTime:cancelTime}},function(error,results){
            callback(Object.keys(results).length != 0);

        });
    },
    updateOrderAplyRefundTime(orderId,aplyRefundTime,callback){
        orderModel.update({orderId:orderId},{aplyRefundTime: aplyRefundTime},function(error,results){
            callback(Object.keys(results).length != 0);
        });
    },
    updateOrderRefundTime(orderId,refundTime,callback){
        orderModel.update({orderId:orderId},{refundTime: refundTime},function(error,results){
            callback(Object.keys(results).length != 0);

        });
    },
    getCar(userId,callback){
        carModel.find({userId:userId},function(error,results){
            callback(results);
        });
    },
    getIntegration(userId,callback){
        integrationModel.find({userId:userId},function(error,results){
            callback(results);
        });
    },
    getIntorder(userId,callback){
        var id = "";
        userinfoModel.find({phone:userId},function(error,results){
            if(userId!=null)
                id = results[0]._id;
            else
                callback([]);
            intorderModel.find({userId:id},function(error,results){
                callback(results);
            }).populate("commodityId").populate("userId").populate("userSite").populate("logistics");
        });
    },
    updateOrderRemark(orderId,orderRemark,callback){
        var id = [];
        orderModel.find({orderId:orderId},function(error,results){
            for(var i = 0;i<results.length;i++){
                id.push(results[i]._id);
            }
            for(var i = 0;i<id.length;i++){
                orderModel.update({_id:id[i]},{$set:{orderRemark:orderRemark[i],orderState:"已完成"}},function(error,results){});
            }
            callback(Object.keys(results).length != 0);
        });
    },
    getCommodity(callback){
        commodityModel.find(function(error,results){
            callback(results);
        });
    }
}