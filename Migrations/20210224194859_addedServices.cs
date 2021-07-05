using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class addedServices : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Sales",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "address",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "customer_name",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "phone",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "return_date",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "service_charge",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "service_date",
                table: "Sales",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
        }
    }
}
