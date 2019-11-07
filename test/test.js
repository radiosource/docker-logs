const PAYLOAD = 'payload';
const expect = require("chai").expect;
const {storage} = require("config");

(async () => {

  describe('Storage functions availability', function () {
    it(`storage.write is a function`, function () {
      return expect(storage.write instanceof Function).to.be.equal(true);
    });
    it(`storage.read is a function`, function () {
      return expect(storage.read instanceof Function).to.be.equal(true);
    });
    it(`storage.remove is a function`, function () {
      return expect(storage.remove instanceof Function).to.be.equal(true);
    });
    it(`storage.getList is a function`, function () {
      return expect(storage.getList instanceof Function).to.be.equal(true);
    });
  });

  describe('Working capacity of storage functions', function () {
    it(`storage.write`, async function () {
      const writeResult = await storage.write('a', PAYLOAD).catch(err => err);
      return expect(writeResult).not.to.be.an('error');
    });
    it(`storage.getList`, async function () {
      await storage.write('b', PAYLOAD).catch(console.error);
      const listOfLogsAfterWrite = await storage.getList().catch(console.error);
      return expect(listOfLogsAfterWrite.length).to.be.equal(2);
    });
    it(`storage.read length`, async function () {
      const logs = await storage.read('a').catch(err => []);
      return expect(logs.length).to.be.equal(1);
    });
    it(`storage.read result`, async function () {
      const logs = await storage.read('a').catch(err => []);
      return expect(logs[0]).to.be.equal(PAYLOAD);
    });
    it(`storage.remove not an error`, async function () {
      const deleteResult = await storage.remove('a').catch(err => err);
      return expect(deleteResult).not.to.be.an('error');
    });
    it(`storage.remove is works`, async function () {
      await storage.remove('b').catch(console.error);
      const listOfLogsAfterWrite = await storage.getList().catch(console.error);
      return expect(listOfLogsAfterWrite.length).to.be.equal(0);
    });
  });

})();