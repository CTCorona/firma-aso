<template>
	<v-row>
		<v-col cols="3" />
		<v-col cols="6">
			<v-card light>
				<v-card-title>
					<span style="text-align: center; display: block; margin: auto">
						Preview
					</span>
				</v-card-title>
				<v-card-text>
					<v-divider />
					<v-spacer style="height: 25px" />
					<div id="export">
						<div
							style="font-family: Times; font-size: medium; font-variant-ligatures: normal; orphans: 2; widows: 2;"
						>
							<table cellpading="0" cellspacing="0">
								<tr>
									<td style="background-color: #2f3031; vertical-align: top">
										<img
											width="300"
											style="width: 300px"
											src="https://asocorporate.com/imgs/ASO_1.png"
											alt=""
										/>
										<p
											style="width: 280px; margin: 5px auto 10px; color: #ffffff; font-family: Avenir, Tahoma, sans-serif; font-weight: normal; font-size: 7px; line-height: 10px"
										>
											Contenido confidencial. Prohibido el uso de su contenido para cualquier fin.
											<br />
											LOPD-RGPD.
											<a
												style="color: white; text-decoration: none"
												href="https://asocorporate.com/legal/"
											>
												*Accede para saber más.
											</a>
										</p>
									</td>
									<td style="background-color: #610a1a; padding: 0 10px 10px;">
										<table cellpading="0" cellspacing="10">
											<tr>
												<td>
													<h1
														style="font-size: 14px; font-family: Avenir, Tahoma, sans-serif; font-weight: bold; color: white; line-height: 15px"
													>
														{{ name }}
													</h1>
													<h2
														style="font-size: 14px; font-family: Avenir, Tahoma, sans-serif; font-weight: normal; color: white"
													>
														{{ jobPosition }}
													</h2>
												</td>
											</tr>
											<tr>
												<td>
													<table style="background-color: #610a1a" cellpadding="0" cellspacing="0">
														<tr>
															<td>
																<img
																	width="15"
																	style="vertical-align: center; margin-right: 0px; width: 15px"
																	src="https://asocorporate.com/imgs/ASO_PHONE.png"
																	alt=""
																/>
															</td>
															<td
																style="padding-left: 10px; font-size: 10px; font-family: Avenir, Tahoma, sans-serif; font-weight: normal; color: white; letter-spacing: 1px; line-height: 10px"
															>
																<a
																	style="font-size: 10px; font-family: Avenir, Tahoma, sans-serif; font-weight: normal; line-height: 10px; color: white; text-decoration: none; letter-spacing: 1px;"
																	href="tel:937185021"
																>
																	+34 93 718 50 21
																</a>
																|
																<a
																	style="font-size: 10px; font-family: Avenir, Tahoma, sans-serif; font-weight: normal; line-height: 10px; color: white; text-decoration: none; letter-spacing: 1px;"
																	:href="`tel:${phone}`"
																>
																	{{ phone }}
																</a>
															</td>
														</tr>
														<tr>
															<td>
																<img
																	width="15"
																	style="vertical-align: sub; margin-right: 0px; width: 15px"
																	src="https://asocorporate.com/imgs/ASO_IN.png"
																	alt=""
																/>
															</td>
															<td style="padding-left: 10px">
																<a
																	style="font-size: 10px; font-family: Avenir, Tahoma, sans-serif; font-weight: normal; line-height: 10px; color: white; text-decoration: none; letter-spacing: 1px;"
																	:href="linkedin"
																>
																	linkedin/{{ setLink }}
																</a>
															</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr>
												<td style="padding-top: 10px;">
													<table style="width: 210px" cellpadding="0" cellspacing="0">
														<tr>
															<td style="width: 25px">
																<img
																	width="25"
																	heigth="25"
																	style="width: 25px; height: 25px"
																	src="https://asocorporate.com/imgs/aso_firma_02_new.png"
																	alt=""
																/>
															</td>
															<td style="width: 25px">
																<img
																	width="25"
																	heigth="25"
																	style="width: 25px; height: 25px"
																	src="https://asocorporate.com/imgs/aso_firma_04_new.png"
																	alt=""
																/>
															</td>
															<td style="width: 25px">
																<img
																	width="25"
																	heigth="25"
																	style="width: 25px; height: 25px"
																	src="https://asocorporate.com/imgs/aso_firma_01_new.png"
																	alt=""
																/>
															</td>
															<td style="width: 25px">
																<img
																	width="25"
																	heigth="25"
																	style="width: 25px; height: 25px"
																	src="https://asocorporate.com/imgs/aso_firma_05_new.png"
																	alt=""
																/>
															</td>
															<td style="width: 25px">
																<img
																	width="25"
																	heigth="25"
																	style="width: 25px; height: 25px"
																	src="https://asocorporate.com/imgs/aso_firma_07_new.png"
																	alt=""
																/>
															</td>
															<td style="width: 25px">
																<img
																	width="25"
																	heigth="25"
																	style="width: 25px; height: 25px"
																	src="https://asocorporate.com/imgs/aso_firma_03_new.png"
																	alt=""
																/>
															</td>
															<td style="width: 25px">
																<img
																	width="25"
																	heigth="25"
																	style="width: 25px; height: 25px"
																	src="https://asocorporate.com/imgs/aso_firma_06_new.png"
																	alt=""
																/>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<!-- <tr>
									<td style="background-color: #2f3031; padding: 1px 10px 5px">
										<p
											style="color: #ffffff; font-family: Avenir, Tahoma, sans-serif; font-weight: normal; font-size: 7px; line-height: 10px"
										>
											Contenido confidencial. Prohibido el uso de su contenido para cualquier fin.
											<br />
											LOPD-RGPD.
											<a
												style="color: white; text-decoration: none"
												href="https://asocorporate.com/legal/"
												>*Accede para saber más.</a
											>
										</p>
									</td>
									<td style="background-color: #2f3031"></td>
								</tr> -->
							</table>
						</div>
					</div>
				</v-card-text>
			</v-card>
		</v-col>
		<v-col cols="2" />
	</v-row>
</template>

<script>
	export default {
		name: "Preview",
		props: {
			name: String,
			jobPosition: String,
			linkedin: String,
			email: String,
			phone: String
		},
		computed: {
			setLink() {
				const n = this.name.split(" ")
				let url = n[0] + n[1]
				return n[1] !== undefined ? url : ""
			}
		}
	}
</script>
