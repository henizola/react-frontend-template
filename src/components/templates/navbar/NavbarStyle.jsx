import styled from "styled-components";
export const Container = styled.div`
	nav {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1030;

		background-color: rgb(0 74 94);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: 1rem 5rem;
	}
	.main-nav {
		/* background-color: cyan; */
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: 62vw;
	}
	@media screen and (max-width: 600px) {
		.main-nav {
			/* background-color: cyan; */
			flex: 1;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			max-width: 100vw;
		}
		nav {
			padding: 1rem 0;
			text-align: center !important;
		}
	}
	.navbar_logo_wrapper {
		width: 100px;
		height: 45px;
	}

	.navbar_logo_img {
		max-height: 100%;

		height: 70%;
	}

	.rightsidenav {
		display: flex;
		list-style: none;
		margin: 0;
	}
	.rightsidenav_item {
		margin: 0 10px;
	}

	.navbar_icons {
		color: #fff;
		font-size: 20px;
		margin: 0 10px;
		transition: all 0.5s;
	}

	.navbar_icons:hover {
		color: #ed0000;
		transition: all 0.5s;
	}
	.toggle-menu {
		display: none;
		order: 1;
	}

	#check {
		display: none;
	}

	@media (max-width: 768px) {
		.toggle-menu {
			display: block;
			float: right;
			color: white;
		}
		.main-nav {
			background-color: black;

			display: none;
			position: fixed;
			top: 10vh;
			flex-direction: column;
			align-items: center;
			justify-content: start;

			height: 100%;
			width: 100%;
		}
		#check:checked ~ div.main-nav {
			display: flex;
		}
		.rightsidenav {
			display: flex;
			flex-direction: column;
		}
		.rightsidnav2 {
			display: flex;
			flex-direction: row;
		}
		.rightsidenav_item {
			margin: 10px;
		}
	}
`;
