// <!------------------- stage 2.2 use foreach method, so we could dynamicly add beyond 3 users to table in future ------------------->

function loadUsersArr(usersArray) {
//  console.log(usersArray);
            //counter
            let c=1;
            // the write function Writes one or more HTML expressions to a document in the specified window.
            // we will write all 3 relevant user properties

            let table = document.getElementById('table');
                    usersArray.forEach(user => {
                        let row = document.createElement('tr');
                        let tdUser = document.createElement('td');
                        $(tdUser).text(user.user);
                        
                        
                        // table.write("<tr>");
                        // table.write("<td>")
                        // table.write(user.user);
                        // table.write("</td>")
                        // table.write("<td>")
                        // table.write(user.name);
                        // table.write("</td>")
                        // table.write("<td>")
                        // wrap picture in download link
                        //make image draggable
                        // table.write("<a href='" + user.picture +
                        //     "' download='userPic'  ><img src='"
                        //     + user.picture + "' style='height: 100px' id='link"+c+
                        //     "' draggable='true' ondragstart='drag(event)' ></a>"
                        // );
                        // table.write("</td>")
                        // table.write("</tr>");
                        // increnment counter
                    c++;
                });
            }