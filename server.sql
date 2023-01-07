//create a service to connect docker engine
CREATE SERVICE docker_engine
  FOREIGN DATA WRAPPER docker_fdw
  OPTIONS (host 'tcp:// //host ip:2375');
