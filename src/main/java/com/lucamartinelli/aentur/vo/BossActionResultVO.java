package com.lucamartinelli.aentur.vo;

import java.io.Serializable;
import java.util.Objects;

public class BossActionResultVO implements Serializable {
	
	
	private static final long serialVersionUID = -3907401402450263661L;
	
	public int id;
	public String title;
	public String description;
	public String effect;
	public String img;
	
	public BossActionResultVO() {
	}

	public BossActionResultVO(int id, String title, String description, String effect, String img) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.effect = effect;
		this.img = img;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getEffect() {
		return effect;
	}
	public void setEffect(String effect) {
		this.effect = effect;
	}

	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}

	@Override
	public int hashCode() {
		return Objects.hash(description, effect, id, img, title);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BossActionResultVO other = (BossActionResultVO) obj;
		return Objects.equals(description, other.description) && Objects.equals(effect, other.effect) && id == other.id
				&& Objects.equals(img, other.img) && Objects.equals(title, other.title);
	}

	@Override
	public String toString() {
		return "BossActionResultVO [id=" + id + ", title=" + title + ", description=" + description + ", effect="
				+ effect + ", img=" + img + "]";
	}

	
}
