const PROTO_PATH = 'definitions.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).OnlineShop;


function main() {

    let baseaddress = "0.0.0.0";
    let customerID = "1";


    var client = new hello_proto.OrdersService(baseaddress + ':50051',
        grpc.credentials.createInsecure());

    client.GetOrdersForCustomerID({id: customerID}, function (err, response) {
        console.log('GetOrdersForCustomerID:', response);
    });
}

main();