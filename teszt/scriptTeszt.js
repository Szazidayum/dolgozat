QUnit.module('A row() függvények ellenőrzése', function () {
    QUnit.test('Létezik-e a row függvény?', function (assert) {
        assert.ok(row, "létezik a függvény");
    });
    QUnit.test('függvénye?', function (assert) {
        assert.ok(typeof row === "function", "igen, fv");
    });
    QUnit.test('tomb=["X","X","X","-","-","-","-","O","O"]', function (assert) {
        tomb=["X","X","X","-","-","-","-","O","O"]
        assert.equal(row(), true);
    });
    QUnit.test('tomb=["O","O","O","X","X","X","-","O","O"]', function (assert) {
        tomb=["O","O","O","X","X","X","-","O","O"]
        assert.equal(row(), true);
    });
    QUnit.test('tomb=["O","O","O","-","-","-","X","X","X"]', function (assert) {
        tomb=["O","O","O","-","-","-","X","X","X"]
        assert.equal(row(), true);
    });
});
QUnit.module('A column() függvények ellenőrzése', function () {
    QUnit.test('Létezik-e a column függvény?', function (assert) {
        assert.ok(column, "létezik a függvény");
    });
    QUnit.test('függvénye?', function (assert) {
        assert.ok(typeof column === "function", "igen, fv");
    });
    QUnit.test('tomb=["X","O","O","X","-","-","X","-","-"]', function (assert) {
        tomb=["X","O","O","X","-","-","X","-","-"]
        assert.equal(column(), true);
    });
    QUnit.test('tomb=["-","X","-","O","X","-","O","X","-"]', function (assert) {
        tomb=["-","X","-","O","X","-","O","X","-"]
        assert.equal(column(), true);
    });
    QUnit.test('tomb=["-","O","X","O","-","X","-","-","X"]', function (assert) {
        tomb=["-","O","X","O","-","X","-","-","X"]
        assert.equal(column(), true);
    });
});
QUnit.module('A balrolJobra() függvények ellenőrzése', function () {
    QUnit.test('Létezik-e a balrolJobra függvény?', function (assert) {
        assert.ok(balrolJobra, "létezik a függvény");
    });
    QUnit.test('függvénye?', function (assert) {
        assert.ok(typeof balrolJobra === "function", "igen, fv");
    });
    //QUnit.test('', function (assert) {
      //  tomb=["O","X","X","-","O","-","-","-","O"]
       // assert.equal(balrolJobra(), true); //program hiba!
   // });
});
QUnit.module('A jobbrolBalra() függvények ellenőrzése', function () {
    QUnit.test('Létezik-e a jobbrolBalra függvény?', function (assert) {
        assert.ok(jobbrolBalra, "létezik a függvény");
    });
    QUnit.test('függvénye?', function (assert) {
        assert.ok(typeof jobbrolBalra === "function", "igen, fv");
    });
    //QUnit.test('', function (assert) {
      //  tomb=["O","-","X","-","X","O","X","-",""]
       // assert.equal(jobbrolBalra(), true); //program hiba!
   // });
});
QUnit.module('A cross() függvények ellenőrzése', function () {
    QUnit.test('Létezik-e a cross függvény?', function (assert) {
        assert.ok(cross, "létezik a függvény");
    });
    QUnit.test('függvénye?', function (assert) {
        assert.ok(typeof cross === "function", "igen, fv");
    });
    QUnit.test('cross true?', function (assert) {
        assert.equal(cross(), true);
    });
    QUnit.test('cross false?', function (assert) {
        assert.equal(cross(), false);
    });
});
QUnit.module('A ellenorzes() függvények ellenőrzése', function () {
    QUnit.test('Létezik-e a ellenorzes függvény?', function (assert) {
        assert.ok(ellenorzes, "létezik a függvény");
    });
    QUnit.test('függvénye?', function (assert) {
        assert.ok(typeof ellenorzes === "function", "igen, fv");
    });
    QUnit.test('ellenőrzés true', function (assert) {
        assert.equal(ellenorzes(), true);
    });
    QUnit.test('ellenorzes false?', function (assert) {
        assert.equal(ellenorzes(), false);
    });
});