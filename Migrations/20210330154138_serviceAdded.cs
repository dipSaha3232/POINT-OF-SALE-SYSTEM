using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class serviceAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "address",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "customer_name",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "phone",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "return_date",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "service_charge",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "service_date",
                table: "Sales");

            migrationBuilder.CreateTable(
                name: "Services",
                columns: table => new
                {
                    pid = table.Column<string>(nullable: false),
                    price = table.Column<float>(nullable: false),
                    category = table.Column<string>(nullable: true),
                    size = table.Column<float>(nullable: false),
                    color = table.Column<string>(nullable: true),
                    brand = table.Column<string>(nullable: true),
                    date_of_purchase = table.Column<string>(nullable: true),
                    customer_name = table.Column<string>(nullable: true),
                    address = table.Column<string>(nullable: true),
                    phone = table.Column<string>(nullable: true),
                    service_date = table.Column<string>(nullable: true),
                    return_date = table.Column<string>(nullable: true),
                    service_charge = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Services", x => x.pid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Services");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Sales",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "address",
                table: "Sales",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "customer_name",
                table: "Sales",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "phone",
                table: "Sales",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "return_date",
                table: "Sales",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "service_charge",
                table: "Sales",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "service_date",
                table: "Sales",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
