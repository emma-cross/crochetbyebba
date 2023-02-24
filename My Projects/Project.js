class Yarn
{
    brand = "x";
    name = "x";
    colors = [];

    constructor(brand, name)
    {
        this.brand = brand;
        this.name = name;
    }

    addColor(color) { this.colors[this.colors.length] = color; }

    display() 
    {
        var str = this.brand + " " + this.name;
        if (this.colors.length > 0)
        {
            str += " [";
            for (var i = 0; i < this.colors.length; ++i)
            {
                str += this.colors[i];
                if (i < this.colors.length - 1)
                    str += ", ";
            }
            str += "]";
        }
        return str;
    }
}

class Project
{
    name = "x";
    pattern = {
        "name": "x",
        "link": "x",
        "shopname": "x",
        "shoplink": "x"
    };
    yarn = []; hook = 0.0;
    start = "mm/dd/yyyy"; end = "mm/dd/yyyy"; time = 0;

    constructor(name, 
                p_name, p_link, p_shopname, p_shoplink, 
                hook, start, end, time)
    {
        this.name = name;
        this.pattern.name = p_name;
        this.pattern.link = p_link;
        this.pattern.shopname = p_shopname;
        this.pattern.shoplink = p_shoplink;
        this.hook = hook;
        this.start = start;
        this.end = end;
        this.time = time;
    }

    addYarn(yarn) { this.yarn[this.yarn.length] = yarn; }

    display(div)
    {
        if (this.name == "x")
            return;
        // Name
        var html_name = document.createElement("h2");
        html_name.appendChild(document.createTextNode(this.name));
        div.append(html_name);
        // Image
        var html_img = document.createElement("img");
        html_img.style.display = "block";
        html_img.style.marginLeft = "auto";
        html_img.style.marginRight = "auto";
        html_img.style.width = "25%";
        html_img.src = "img/" + this.name + ".png";
        div.append(html_img);
        // Pattern
        var html_pattern = document.createElement("p");
        if (this.pattern.name == "me")
        {
            html_pattern.appendChild(document.createTextNode("Pattern: by me!! :]"));
        }
        else if (this.pattern.name != "x")
        {
            var html_pattern_pattern = document.createElement("a");
            html_pattern_pattern.appendChild(document.createTextNode(this.pattern.name));
            if (this.pattern.link != "x")
                html_pattern_pattern.href = this.pattern.link;
            var html_pattern_shop = document.createElement("a");
            html_pattern_shop.appendChild(document.createTextNode(this.pattern.shopname));
            if (this.pattern.shoplink != "x")
                html_pattern_shop.href = this.pattern.shoplink;
            html_pattern.appendChild(document.createTextNode("Pattern: \""));
            html_pattern.appendChild(html_pattern_pattern);
            html_pattern.appendChild(document.createTextNode("\" by "));
            html_pattern.appendChild(html_pattern_shop);
        }
        else
        {
            html_pattern.appendChild(document.createTextNode("Pattern: ?"));
        }
        div.append(html_pattern);
        // Yarn
        var html_yarn = document.createElement("p");
        if (this.yarn.length > 0 && this.yarn[0].name != "x")
        {
            var str = "Yarn: ";
            for (var i = 0; i < this.yarn.length; ++i)
            {
                str += this.yarn[i].display();
                if (i < this.yarn.length - 1)
                    str += ", ";
            }
            html_yarn.appendChild(document.createTextNode(str + " - " + String(this.hook) + "mm hook"));
        }
        else
        {
            html_yarn.appendChild(document.createTextNode("Yarn: ?"));
        }
        div.append(html_yarn);
        // Date
        if (this.end != "mm/dd/yyyy")
        {
            var html_date = document.createElement("p");
            html_date.appendChild(document.createTextNode("Completed on " + this.end));
            div.append(html_date);
        }
        // Time
        if (this.time >= 0)
        {
            var html_time = document.createElement("p");
            html_time.appendChild(document.createTextNode("Took ~" + String(this.time) + " hrs to complete"));
            div.append(html_time);
        }
        else if (this.start != "mm/dd/yyyy")
        {
            var days = Math.floor(((new Date(this.end)).getTime() - (new Date(this.start)).getTime()) / (1000 * 3600 * 24));
            var html_time = document.createElement("p");
            html_time.appendChild(document.createTextNode("Worked on from " + this.start + " (about " + String(days) + " days)"));
            div.append(html_time);
        }
    }
}