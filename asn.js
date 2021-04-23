module.exports = function (RED) {
    function asn(config) {
        const utils = require('../utils/utils')
        RED.nodes.createNode(this, config);  
        var node = this
        node.topic = 'asn'

        node.file = __dirname + '/asn.py'
  
        node.config = {
            ip: config.ip,
            input: config.input,
            output: config.output
        }

        utils.run(RED, node, config)
    }
    RED.nodes.registerType("asn", asn);
}
