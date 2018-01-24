
        function create_table () {
        var c_table = document.createElement("table");
        var c_tr = document.createElement("tr");
        var c_td = document.createElement("td");
        var name1 = document.getElementById('name').value
        var liter1 = document.getElementById('antall_liter').value
        var mesketid1 = document.getElementById('tid_mesk').value
        var koketid1 = document.getElementById('tid_kok').value

        var c_cell1 = document.createTextNode(name1);
        var c_cell2 = document.createTextNode(liter1);
        var c_cell3 = document.createTextNode(mesketid1);
        var c_cell4 = document.createTextNode(koketid1);


        c_table.setAttribute("id", "table1");
        document.body.appendChild(c_table);

        c_tr.setAttribute("id", "tr1");
        document.getElementById("table1").appendChild(c_tr);

        c_td.appendChild(c_cell1);
        document.getElementById("tr1").appendChild(c_td);

        c_tr.setAttribute("id", "tr2");
        document.getElementById("table1").appendChild(c_tr);

        c_td.appendChild(c_cell2);
        document.getElementById("tr2").appendChild(c_td);

        c_tr.setAttribute("id", "tr3");
        document.getElementById("table1").appendChild(c_tr);

        c_td.appendChild(c_cell3);
        document.getElementById("tr3").appendChild(c_td);

        c_tr.setAttribute("id", "tr4");
        document.getElementById("table1").appendChild(c_tr);

        c_td.appendChild(c_cell4);
        document.getElementById("tr4").appendChild(c_td);

      }
