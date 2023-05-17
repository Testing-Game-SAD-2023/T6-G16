package src;

public class testClass {
    
    private testClass c;


    public void setUp() throws Exception { 
        c = new testClass();
        assertNotNull(c);
        } 

    
    public void tearDown() throws Exception { 
        c=null;
        assertNull(c);
    } 

  // TEST
  // Write your test class here
        
}


   