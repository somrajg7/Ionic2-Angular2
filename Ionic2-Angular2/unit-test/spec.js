import FirstPage from './todo';
describe('Testing for firstpage', function(){
    var fp;
    fp = new FirstPage();
    
    it('id should be 18', function(){
        expect(fp.model.id).toBe(18);
    });
    
    it('name should be Hilton Memphis', function(){
        expect(fp.model.name).toBe('Hilton Memphis');
    });
    
    it('city should be Memphis', function(){
        expect(fp.model.city).toBe('Memphis');
    });
    
    it('address should be 939 Ridge Lake Blvd', function(){
        expect(fp.model.address).toBe('939 Ridge Lake Blvd');
    });
    
    it('postalCode should be Hilton Memphis', function(){
        expect(fp.model.postalCode).toBe('38120');
    });
    
    it('state should be TN', function(){
        expect(fp.model.state).toBe('TN');
    });
    
    it('country should be US', function(){
        expect(fp.model.country).toBe('US');
    });
    
    it('phone should be 901-762-7496', function(){
        expect(fp.model.phone).toBe('901-762-7496');
    });
});