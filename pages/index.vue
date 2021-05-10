<template>
	<v-container>
		<v-row>
			<v-col cols="3" />
			<v-col cols="6">
				<v-card style="background-color: #610a1a">
					<v-card-title>
						<span style="text-align: center; display: block; margin: auto">
							<v-spacer style="height: 20px" />
							<img src="~/assets/logo.png" width="100" style="display: block; margin: auto" />
							<v-spacer style="height: 20px" />
							Signature Generator
							<v-spacer style="height: 20px" />
						</span>
					</v-card-title>
					<v-card-text>
						<v-text-field
							label="Name"
							filled
							v-model="name"
							prepend-inner-icon="mdi-account-outline"
						/>
						<v-text-field
							label="Job Position"
							filled
							v-model="jobPosition"
							prepend-inner-icon="mdi-briefcase-outline"
						/>
						<!-- <v-text-field label="Email" filled v-model="email" prepend-inner-icon="mdi-email-outline" /> -->
						<v-text-field
							label="Phone"
							type="tel"
							filled
							v-model="phone"
							v-mask="'+## ### ## ## ##'"
							prepend-inner-icon="mdi-phone-outline"
						/>
						<v-text-field
							label="Linkedin"
							filled
							v-model="linkedin"
							prepend-inner-icon="mdi-briefcase-outline"
						/>
						<v-row>
							<v-col cols="4">
								<v-btn @click="downloadSignature" color="primary" block>
									Download
								</v-btn>
							</v-col>
							<v-col cols="4" />
							<v-col cols="4">
								<v-btn @click="resetFields" color="primary" block>
									Reset
								</v-btn>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="3" />
		</v-row>

		<Preview
			:name="name"
			:email="email"
			:job-position="jobPosition"
			:phone="phone"
			:linkedin="linkedin"
		/>
	</v-container>
</template>

<script>
	import Preview from "../components/preview"

	export default {
		components: { Preview },
		data() {
			return {
				name: "Angel Aso Roldán",
				jobPosition: "CEO Founder & Managing Partner",
				linkedin: "https://www.linkedin.com/in/advocat/?originalSubdomain=es",
				email: "ferran@einagrill.com",
				phone: "+34 622642468"
			}
		},
		methods: {
			downloadSignature() {
				const fileName = "mail_signature.html"
				const mimeType = "text/html"
				let elHtml = document.querySelector("#export").innerHTML
				let link = document.createElement("a")
				console.log(encodeURIComponent(elHtml))
				link.setAttribute("download", fileName)
				link.setAttribute("href", `data:${mimeType};charset=utf-8,${encodeURIComponent(elHtml)}`)
				link.click()
				console.log("Esto va!")
			},
			resetFields() {
				this.name = null
				this.jobPosition = null
				this.email = null
				this.phone = null
			}
		}
	}
</script>
