using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class addedSales : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sales",
                columns: table => new
                {
                    pid = table.Column<string>(nullable: false),
                    price = table.Column<float>(nullable: false),
                    category = table.Column<string>(nullable: true),
                    size = table.Column<float>(nullable: false),
                    color = table.Column<string>(nullable: true),
                    brand = table.Column<string>(nullable: true),
                    date_of_purchase = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sales", x => x.pid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sales");
        }
    }
}
