var libxmljs = require('../index');

module.exports.new = function(assert) {
    var window = new libxmljs.Window();
    assert.ok(window.document);
    assert.ok(window.self === window);
    assert.ok(window.parent === window);
    assert.ok(window.top === window);
    assert.ok(window.window === window);
    assert.done();
}
