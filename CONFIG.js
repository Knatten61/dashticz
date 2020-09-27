var config = {}                                                                                                
config['domoticz_ip'] = 'http://192.168.200.13:8080';                                                          
config['app_title'] = 'Dashticz V3';                                                                           
config['domoticz_refresh'] = '5';                                                                              
config['dashticz_refresh'] = '60';                                                                             
                                                                                                               
config['use_favorites'] = 0; //Request all Domoticz Devices, not only favorites                                
config['auto_positioning'] = 0; // Use 0 this if you have defined your own columns                             

config['default_news_url'] = 'https://www.nrk.no/toppsaker.rss';

//Definition of blocks                                                                                         
blocks = {}                                                                                                    
blocks[93] = { width: 6}                                                                                       
blocks[94] = { width: 6}                                                                                       
                                                                                                               
//Definition of columns                                                                                        
columns = {}                                                                                                   
//columns[1] = {width: 4}
columns[2] = { blocks : [94, 93], width: 8}                                                                    

columns[1] = {
  blocks: ['news'],
  width: 4
}
                                                                                                               
//Definition of screens                                                                                        
screens = {}                                                                                                   
screens[1] = {columns: [1, 2]}                                                                       
