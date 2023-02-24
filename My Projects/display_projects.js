// Convert data to JSON object
var data = JSON.parse(strData);
// Read project data
var projects = [];
var i = 0;
while (i != -1)
{
    try {
        // Store data in a Project object
        projects[i] = new Project(
            data[i].Name,
            data[i].Pattern.Name, data[i].Pattern.Link, data[i].Pattern.ShopName, data[i].Pattern.ShopLink, 
            data[i].HookSize, data[i].StartDate, data[i].EndDate, data[i].Time
        );
        // Read yarn
        var j = 0;
        while (j != -1)
        {
            try {
                var yarn = new Yarn(data[i].Yarn[j].Brand, data[i].Yarn[j].Name);
                // Read colors
                var k = 0;
                while (k != -1)
                {
                    try {
                        var color = data[i].Yarn[j].Colors[k];
                        if (color == "" || color == undefined)
                            throw new Error("no error - end of color array")
                        yarn.addColor(color);
                        // Goto next color
                        ++k;
                    } catch (error3) { k = -1; }
                }
                // Add yarn to project
                projects[i].addYarn(yarn);
                // Goto next yarn
                ++j;
            } catch (error2) { j = -1; }
        }
        // Goto next project
        ++i;
    } catch (error1) { i = -1; }
}

// Create project elements
var div = document.getElementById("projects");
for (var i = 0; i < projects.length; ++i)
    projects[i].display(div);